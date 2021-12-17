/** @format */
import Image from 'next/image'
import data from "../utils/data";
import { Box, Grid, Typography, Button } from "@mui/material";
function Services() {
	return (
		<Box
			className="service__container"
		>
			<Typography
				sx={{
					textAlign: "center",
				}}
				component="div"
				variant="h5"
				className="service__title"
			>
				<a>
					<img src="/images/ser-logo.png" alt="" className="logo-ser" />
				</a>
				<Typography variant="h5" component="h5" sx={{
					color: ' #cda922',
					fontSize: '28px',
					fontStyle: 'normal',
					fontWeight: 700,
					textAlign: 'center',
					mb: 4
				}}>DỊCH VỤ NỔI BẬT</Typography>
			</Typography>
			<Typography sx={{
				margin: "0 auto",
				width: 1200,
			}}>
				<Grid container gap={16}>
					{data.services.map((ser) => {
						return (
							<Grid
								item
								xs={6}
								md={3}
								sx={{
									height: 440,
									position: 'relative',
									borderRadius: '8px'
								}}
								className={`service__item bg__service${ser.id}`}
								key={ser.name}
							>
								<Typography component="div" variant="h5" sx={{
									position: 'absolute',
									bottom: '20px',
									left: '20px',
									right: '20px',
									zIndex: 10
								}}>
									<Typography component="h3" variant="h6" sx={{
										color: '#fff',
										fontWight: 700,
										fontSize: '20px',
										lightHeight: '34px'
									}}>
										{ser.name}
									</Typography>
									<Typography component="p" variant="body2" sx={{
										color: '#fff',
										fontWight: 400,
										fontSize: '14px',
										lightHeight: '21px',
										mb: 2
									}}>
										{ser.description}
									</Typography>
									<Button
										sx={{
											bgcolor: "transparent",
											fontSize: "14px",
											fontWeight: 400,
											padding: "8px 12px",
											border: "1px solid #cda922",
											color: "#cda922",
											borderRadius: "8px",
										}}
										variant="text"
									>
										Xem Chi Tiết
									</Button>
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</Typography>
		</Box>
	);
}

export default Services;
