import { v4 as uuidv4 } from 'uuid';

const data = {
	foods: [
		{
			id: uuidv4(),
			name: "Bò lúc lắc sốt tomyum và thêm rau củ",
			category: "mon-moi",
			image: '/images/mon-an/mon-an-1.jpg',
			prices: [
				{
					id: 1,
					size: "S",
					price:100000
				},
				
				{
					id:2,
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Cá bóng mú sốt chanh dây",
			category: "mon-moi",
			image: '/images/mon-an/mon-an-2.jpg',
			prices: [
				{
					id:3,
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Cá chép hấp hồng kong",
			category: "mon-moi",
			image: '/images/mon-an/mon-an-3.jpg',
			prices: [
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Chả mực hạ long",
			category: "mon-moi",
			image: '/images/mon-an/mon-an-4.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Cơm chiên hải sản",
			category: "mon-yeu-thich",
			image: '/images/mon-an/mon-an-5.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Gà bó xôi sốt chua ngọt",
			category: "mon-yeu-thich",
			image: '/images/mon-an/mon-an-6.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Gà nướng lu kèm khoai tây",
			category: "mon-yeu-thich",
			image: '/images/mon-an/mon-an-7.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Cơm chiên dương châu",
			category: "mon-yeu-thich",
			image: '/images/mon-an/mon-an-8.jpg',
			prices: [
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Gà tiềm rau củ ",
			category: "mon-yeu-thich",
			image: '/images/mon-an/mon-an-9.jpg',
			prices: [
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Khai vị 3 món 1",
			category: "mon-khai-vi",
			image: '/images/mon-an/mon-an-10.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Heo quay",
			category: "mon-khai-vi",
			image: '/images/mon-an/mon-an-11.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Khai vị 3 món 2",
			category: "mon-khai-vi",
			image: '/images/mon-an/mon-an-12.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Khai vị 3 món (gỏi lỗ tai heo)",
			category: "mon-khai-vi",
			image: '/images/mon-an/mon-an-13.jpg',
			prices: [
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Khai vị 3 món (gỏi chả giò chạo tôm)",
			category: "mon-khai-vi",
			image: '/images/mon-an/mon-an-14.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Gỏi tôm thịt thượng hạng",
			category: "mon-goi",
			image: '/images/mon-an/mon-an-15.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Bào ngư sốt dầu hào cải xanh 1",
			category: "mon-goi",
			image: '/images/mon-an/mon-an-16.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Bào ngư sốt dầu hào cải xanh 2",
			category: "mon-goi",
			image: '/images/mon-an/mon-an-17.jpg',
			prices: [
				
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},
		{
			id: uuidv4(),
			name: "Bào ngư sốt dầu hào cải xanh 3",
			category: "mon-goi",
			image: '/images/mon-an/mon-an-18.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				
			],
		},
		{
			id: uuidv4(),
			name: "Bào ngư sốt dầu hào cải xanh 4",
			category: "mon-goi",
			image: '/images/mon-an/mon-an-19.jpg',
			prices: [
				{
					size: "S",
					price:100000
				},
				{
					size: "M",
					price:250000
				},
				{
					size: "L",
					price:500000
				},
			],
		},


	],
	services: [
		{
			id:1,
			name: 'THIẾT KẾ TIỆC CƯỚI',
			description: "Xu hướng mới hiện nay cho tiệc cưới chính là sự khác biệt. Bất cứ ai cũng muốn buổi tiệc của mình...",
			image: '/images/dich-vu/dv-1.jpg',
		},
		{
			id:2,
			name: 'BÀN GALLERY',
			description: "Bàn Gallery, nơi lưu lại những hình ảnh đẹp của cô dâu chú rể, cũng là nơi gia đình chào đón những...",
			image: '/images/dich-vu/dv-2.jpg',
		},
		{
			id:3,
			name: 'TRANG TRÍ HOA TƯƠI',
			description: "Backdrop hoa tươi luôn là điểm nhấn đầu tiên của buổi tiệc. Nơi cô dâu chú rể xuất hiện cùng với...",
			image: '/images/dich-vu/dv-3.jpg',
		},
		{
			id:4,
			name: 'CHỤP ẢNH CƯỚI',
			description: "Phối hợp cùng các đơn vị chụp ảnh cưới chuyên nghiệp, Hương Phố đảm bảo sẽ lưu lại những khoản...",
			image: '/images/dich-vu/dv-4.jpg',
		},
	]
}


export default data;