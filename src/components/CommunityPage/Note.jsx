import React, { PureComponent } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import { connect } from 'react-redux';

import Feed from '../Nostr/Feed';
import ApproveButton from './ApproveButton';

import { navigate, handleNostrPublish, openReplyModal, nostrFollow, handleZapRequest, queryProfiles } from '../../actions';
import { transition } from '../../helpers';
import { COLORS } from '../../constants';


class Note extends PureComponent {

	state = { loaded: false, postId: null };

	componentDidMount = () => {

		const decoded = nip19.decode(this.props.id);
		const postId = decoded.data;

		this.setState({ loaded: true, postId }, () => {

			const filters = [];

			if (!this.props.feed.items[postId]) {

				filters.push({
					ids: [ postId ]
				});
			}

			filters.push({
				kinds: [ 1 ],
				'#e': [ postId ]
			});

			if (this.props.pubkey) {

				filters.push({
					authors: [ this.props.pubkey ],
					'#e': [ postId ],
					kinds: [ 7 ]
				});
			}

			window.client.subscribe(`post_${postId}`, this.props.feed, filters);

			const banner = document.getElementById('banner_image');

			if (banner) {

				const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				const rect = banner.getBoundingClientRect();

				if (scrollTop > rect.height + 52) {
					window.scrollTo({ top: rect.height + 52 });
				}
			}

			this.setState({ visible: true });

		});
	};

	handlePost = (post, replyTo) => {

		return handleNostrPublish(post, replyTo, [ this.props.feed ]);
	};

	handleMobileReply = (replyTo) => {

		const { feed, pubkey } = this.props;

		this.props.openReplyModal({
			author: { pubkey },
			open: true,
			replyTo,
			feed
		});
	};

	handleApprovePost = () => {

		this.props.handleApprovePost(this.props.feed.items[this.state.postId]);
		this.props.navigate(`/n/${this.props.name}/${this.props.ownernpub}/modqueue`);
	};

	renderModState = () => {

		const { loaded, postId } = this.state;

		if (
			!loaded ||
			!postId ||
			!this.props.feed.items[postId] ||
			this.props.feed.items[postId].approval
		) {

			return null;
		}

		return (
			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginBottom: 18
			}}>
				<span style={{
					fontSize: 13,
					color: COLORS.secondaryBright
				}}>
					<Icon name='balance scale' style={{ marginRight: 4 }} />
					Pending moderator approval
				</span>
				{this.props.moderator ? (
					<ApproveButton
						onClick={this.handleApprovePost}
					/>
				) : null}
			</div>
		);
	};

	render = () => {

		const { loaded, postId, visible } = this.state;

		if (!loaded || !postId) {
			return null;
		}

		return (
			<div style={{
				paddingBottom: 800,
				paddingTop: 24,
				opacity: visible ? 1 : 0,
				...transition(0.2, 'ease', [ 'opacity' ])
			}}>
				{this.renderModState()}
				<Feed
					lazyRender
					replaceTitle={postId}
					feed={this.props.feed}
					name={`post_${postId}`}
					mobile={this.props.mobile}
					active={this.props.pubkey}
					searchActive={this.props.searchActive}
					handlePost={this.handlePost}
					handleMobileReply={this.handleMobileReply}
					handleFollow={this.props.nostrFollow}
					handleZapRequest={this.props.handleZapRequest}
					handleQueryProfiles={this.props.queryProfiles}
					contacts={this.props.contacts}
					buildOptions={{ mode: 'post', id: postId }}
					navigate={this.props.navigate}
				/>
			</div>
		);
	};
}

const mapState = ({ nostr, query }) => {

	return {
		searchActive: query.active,
		pubkey: nostr.pubkey
	};
};

export default connect(mapState, { navigate, openReplyModal, nostrFollow, handleZapRequest, queryProfiles })(Note);
