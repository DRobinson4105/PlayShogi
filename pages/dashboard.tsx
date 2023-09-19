import React from "react";
import useCurrentUser from '../hooks/useCurrentUser'
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);
  
	if (!session) {
	  return {
		redirect: {
		  destination: '/auth',
		  permanent: false,
		}
	  }
	}
  
	return {
	  props: {}
	}
  }

const dashboard = () => {

	
	const { data: User } = useCurrentUser();

	return <h1>This is the dashboard for {User?.name}</h1>;
};

export default dashboard;
