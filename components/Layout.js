import React from 'react';
import Head from 'next/head';
import NavBar from './Navbar';
import Footer from './Footer';


export default function Layout({ title, description, children }) {

	return (
		<div>
			<Head>
				<title>{title ? `${title} - Huong Pho Food` : 'Huong Pho Food'}</title>
				{description && <meta name="description" content={description}></meta>}
			</Head>
			<div>
				<NavBar />
				{children}
				<Footer />
			</div>
		</div>
	);
}
