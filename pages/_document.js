import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Dev AT E-commerce website with Next.js" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument