import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileAction';
import { CardDeck } from 'react-bootstrap';


const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {

	useEffect(
		() => {
			getProfiles();
		},
		[ getProfiles ]
	);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment >
					<h3 className="text-center"> Mentors</h3>
					<p className='lead text-center'>
						<i className='fab fa-connectdevelop' /> Browse and connect with Mentors
					</p>
					<CardDeck className='profiles d-flex flex-wrap justify-content-between'>
						{profiles.length > 0 ? (
							profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)
						) : (
							<h5>No profiles found...</h5>
						)}
					</CardDeck>
				</Fragment>
			)}
		</Fragment>
	); 
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profileReducer
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
