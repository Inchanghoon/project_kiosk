const express = require('express');
const app = express();
const mysql = require('mysql');
const con = mysql.createConnection({
	host: 'localhost',
	user: 'c17st23',
	password: 'Cc0VDRloLUXo07L9',
	database: 'c17st23'
});
//app.use(express.static('myFiles'));
//app.locals.pretty = true;
//app.set('view engine', 'pug');
//app.set('views', './views');
con.connect((err) => {
	if (err) throw err;
	console.log('Connected!');
	//let sql = "CREATE TABLE sangmoo (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, menu CHAR(50) NOT NULL, imgSRc CHAR(50) NOT NULL, price INT NOT NULL, info VARCHAR(200), category CHAR(20) NOT NULL)";	// 테이블 생성
	//let sql = `INSERT INTO lunchSpecial (id, menu, imgSrc, price, info) VALUES (NULL, "점심 특선F", "1_lunch_specialA(8p).jpg", 9900, "초밥 8P(연어 2P, 활어 2P, 참치 1P, 새우 1P, 계란 1P, 후토마끼 1P)+메밀+튀김")`;	//개별 추가용
	let sql = `INSERT INTO sangmoo (id, menu, imgSrc, price, info, category) VALUES 	
		(1, "점심 특선A", "1_lunch_specialA(8p).jpg", 9900, "초밥 8P(연어 2P, 활어 2P, 참치 1P, 새우 1P, 계란 1P, 후토마끼 1P)+메밀+튀김", "lunchSpecial"),
		(2, "점심 특선B", "2_lunch_specialB(10p).jpg", 12900, "초밥 10P(연어 2P, 활어 2P, 참치 2P, 새우 1P, 간장새우 1P, 계란 1P, 후토마끼 1P)+메밀+튀김+차완무시", "lunchSpecial"),
		(3, "점심 특선C", "3_lunch_specialC.jpg", 9900, "돈까스+미니우동", "lunchSpecial"),
		(4, "어린이초밥세트", "4_child_sushi_set(8p).jpg", 9000, "8P(새우 2P, 계란 2P, 크래미 2P, 유부 2P)", "mainMenu"),
		(5, "새우초밥 3종세트", "5_shripm_sushi_set(12p).jpg", 21000, "12P(초새우 4P, 간장새우 4P, 구운새우 4P)", "sushiSet"),
		(6, "연어초밥 3종세트", "6_salmon_sushi_set(12p).jpg", 23000, "12P(생연어 4P, 구운연어 4P, 간장연어 4P)", "sushiSet"),
		(7, "미니멀초밥세트", "7_smaller_sushi_set(8p).jpg", 9900, "8P(활어 2P, 연어 2P, 참치 1P, 새우 1P, 계란 1P, 유부 1P)", "mainMenu"),
		(8, "진심초밥세트", "8_jinsim_sushi_set(10p).jpg", 11900, "10P(활어 2P, 연어 2P, 참치 1P, 새우 1P, 소라 1P, 계란 1P, 유부 1P, 후토마끼 1P)", "mainMenu"),
		(9, "철판초밥세트", "9_iron_plate_sushi_set(10p).jpg", 17900, "익힌초밥 10P(연어 2P, 메카도로 2P, 소고기 2P, 새우 2P, 전복 1P, 가리비 1P)", "mainMenu"),
		(10, "자부심초밥세트", "10_pride_sushi_set(10p).jpg", 15900, "10P(활어 3P, 연어 2P, 참치 2P, 새우 1P, 간장새우 1P, 장어 1P)", "mainMenu"),
		(11, "이달의초밥세트", "11_thismonth_sushi_set(10p).jpg", 18000, "10P(계절마다 신선한 재료를 이용하여 만든 초밥)", "mainMenu"),
		(12, "상무초밥세트", "12_sangmoo_sushi_set(10p).jpg", 20900, "10P(활어3, 연어1, 복육1, 메카도로1, 적신1, 전복1, 간장새우1, 장어1, 차완무시)", "mainMenu"),
		(13, "특상무초밥세트", "13_sangmoo_special_sushi_set(17p).jpg", 29900, "초밥 10P+사시미 7P", "mainMenu"),
		(14, "연어 + 소불고기초밥", "14_salmon_beef_sushi_set(8p).jpg", 16000, "연어 4P, 소고기불초밥 4P", "sushiSet"),
		(15, "연어 + 참치초밥", "15_salmon_tuna_sushi_set(9p).jpg", 17500, "연어 4P, 참치 5P", "sushiSet"),
		(16, "장어 + 소고기불초밥", "16_eel_beef_sushi_set(9p).jpg", 17500, "장어 4P, 소고기불초밥 4P", "sushiSet"),
		(17, "활어 + 소고기불초밥", "17_livefish_beef_sushi_set(9p).jpg", 17500, "활어 5P, 소고기불초밥 4P", "sushiSet"),
		(18, "활어 + 연어초밥", "18_livefish_salmon_sushi_set(9p).jpg", 17500, "활어 5P, 연어 4P", "sushiSet"),
		(19, "활어 + 참치초밥", "19_livefish_tuna_sushi_set(10p).jpg", 19000, "활어 5P, 참치 5P", "sushiSet"),
		(20, "활어초밥", "20_livefish_sushi_set(10p).jpg", 18000, "10P", "singleMenu"),
		(21, "참치초밥", "21_tuna_sushi(10p).jpg", 18000, "10P", "singleMenu"),
		(22, "장어초밥", "22_eel_sushi(8p).jpg", 18000, "8P", "singleMenu"),
		(23, "연어초밥", "23_salmono_sushi(8p).jpg", 15000, "8P", "singleMenu"),
		(24, "소고기불초밥", "24_beef_sushi(8p).jpg", 15000, "8P", "singleMenu"),
		(25, "새우초밥", "25_shripm_sushi(10p).jpg", 11000, "10P", "singleMenu"),
		(26, "광어묵은지초밥", "26_flatfish_kimchi_sushi(5p).jpg", 10000, "5P", "singleMenu"),
		(27, "계란초밥", "27_egg_sushi(5p).jpg", 4000, "5P", "singleMenu"),
		(28, "간장새우초밥", "28_soysauce_shrimp_sushi(5p).jpg", 8500, "5P", "singleMenu"),
		(29, "유부초밥", "29_tofu_sushi(5p).jpg", 4000, "5P", "singleMenu"),
		(30, "후토마끼", "30_hutomakki.jpg", 18000, "1줄", "singleMenu"),
		(31, "장어초밥", "31_eel_sushi(1p).jpg", 2500, "1P", "1pcsMenu"),
		(32, "참치초밥", "32_tuna_sushi(1p).jpg", 2000, "1P", "1pcsMenu"),
		(33, "연어초밥", "33_salmon_sushi(1p).jpg", 2000, "1P", "1pcsMenu"),
		(34, "소라초밥", "34_sora_sushi(1p).jpg", 1100, "1P", "1pcsMenu"),
		(35, "황새치뱃살초밥", "35_swordfish_sushi(1p).jpg", 2500, "1P", "1pcsMenu"),
		(36, "소고기불초밥", "36_beef_sushi(1p).jpg", 2000, "1P", "1pcsMenu"),
		(37, "새우초밥", "37_shrimp_sushi(1p).jpg", 1100, "1P", "1pcsMenu"),
		(38, "묵은지광어초밥", "38_flatfish_kimchi_sushi(1p).jpg", 2200, "1P", "1pcsMenu"),
		(39, "도미초밥", "39_domi_sushi(1p).jpg", 2000, "1P", "1pcsMenu"),
		(40, "광어초밥", "40_flatfish_sushi(1p).jpg", 2000, "1P", "1pcsMenu"),
		(41, "광어지느러미초밥", "41_flatfish_pin_sushi(1p).jpg", 2500, "1P", "1pcsMenu"),
		(42, "간장새우초밥", "42_soysauce_shrimp_sushi(1p).jpg", 1800, "1P", "1pcsMenu"),
		(43, "활어회", "43_livefish_sasimi(small, big).jpg", 35000, "활어", "sasimi"),
		(44, "특모듬회", "44_sasimi_special.jpg", 60000, "활어, 참치", "sasimi"),
		(45, "참치회", "45_tuna_sasimi(small, big).jpg", 35000, "참치", "sasimi"),
		(46, "연어회", "46_salmon_sasimi.jpg", 33000, "연어", "sasimi"),
		(47, "1인 사시미", "47_personal_sasimi.jpg", 9900, "주류주문 필수", "sasimi"),
		(48, "혼술세트", "48_drink_alone_set.jpg", 25000, "초밥 5P + 사시미 8P + 우동", "sasimi"),
		(49, "지라시 덮밥", "49_jirashi_rice.jpg", 11000, " ", "sideMenu"),
		(50, "카이센동", "50_kaisen_rice.jpg", 19000, NULL, "sideMenu"),
		(51, "특카이센동", "51_special_kaisen_rice.jpg", 29000, NULL, "sideMenu"),
		(52, "크림카레우동", "52_cream_curry_udon.jpg", 12000, NULL, "sideMenu"),
		(53, "가츠오우동", "53_gacho_udon.jpg", 6900, NULL, "sideMenu"),
		(54, "덴뿌라", "54_denbbura.jpg", 9900, NULL, "sideMenu"),
		(55, "왕새우튀김", "55_fried_shrimp.jpg", 20000, "5P", "sideMenu"),
		(56, "돈까스", "56_pork_cutlet.jpg", 9900, NULL, "sideMenu"),
		(57, "도미머리구이", "57_domi_head_roast.jpg", 15000, NULL, "sideMenu"),
		(58, "메로구이", "58_mero_roast.jpg", 16000, NULL, "sideMenu"),
		(59, "연어머리구이", "59_salmon_head_roast.jpg", 15000, NULL, "sideMenu"),
		(60, "시라타키 준마이", "60_silataki_junmai.png", 30000, NULL, "drinkMenu"),
		(61, "상선여수 준마이", "61_junmai_1.jpg", 45000, NULL, "drinkMenu"),
		(62, "죠젠미즈노고토시 준마이다이긴죠", "62_junmai_2.png", 40000, NULL, "drinkMenu"),
		(63, "죠젠미즈노고토시 준마이긴죠", "63_junmai_3.jpg", 50000, NULL, "drinkMenu"),
		(64, "일품진로", "64_jinro_special.png", 20000, NULL, "drinkMenu"),
		(65, "아사히 생맥주", "65_asahi_beer.png", 6000, NULL, "drinkMenu"),
		(66, "복분자", "66_bokbunja.png", 10000, NULL, "drinkMenu"),
		(67, "매취순", "67_maechisun.jpg", 10000, NULL, "drinkMenu"),
		(68, "소주/맥주/청하", "68_any_drink.jpg", 6000, NULL, "drinkMenu")`;

	
	//let values = [
		//[1, "점심 특선A", "1_lunch_specialA(8p).jpg", 9900, "초밥 8P(연어 2P, 활어 2P, 참치 1P, 새우 1P, 계란 1P, 후토마끼 1P)+메밀+튀김", "lunchSpecial"],
		//[2, "점심 특선B", "2_lunch_specialB(10p).jpg", 12900, "초밥 10P(연어 2P, 활어 2P, 참치 2P, 새우 1P, 간장새우 1P, 계란 1P, 후토마끼 1P)+메밀+튀김+차완무시", "lunchSpecial"],
		//[3, "점심 특선C", "3_lunch_specialC.jpg", 9900, "돈까스+미니우동", "lunchSpecial"]
		//[4, "어린이초밥세트", "4_child_sushi_set(8p).jpg", 9000, "8P(새우 2P, 계란 2P, 크래미 2P, 유부 2P)", "mainMenu"],
		//[5, "새우초밥 3종세트", "5_shripm_sushi_set(12p).jpg", 21000, "12P(초새우 4P, 간장새우 4P, 구운새우 4P)", "sushiSet"],
		//[6, "연어초밥 3종세트", "6_salmon_sushi_set(12p).jpg", 23000, "12P(생연어 4P, 구운연어 4P, 간장연어 4P)", "sushiSet"],
		//[7, "미니멀초밥세트", "7_smaller_sushi_set(8p).jpg", 9900, "8P(활어 2P, 연어 2P, 참치 1P, 새우 1P, 계란 1P, 유부 1P)", "mainMenu"],
		//[8, "진심초밥세트", "8_jinsim_sushi_set(10p).jpg", 11900, "10P(활어 2P, 연어 2P, 참치 1P, 새우 1P, 소라 1P, 계란 1P, 유부 1P, 후토마끼 1P)", "mainMenu"],
		//[9, "철판초밥세트", "9_iron_plate_sushi_set(10p).jpg", 17900, "익힌초밥 10P(연어 2P, 메카도로 2P, 소고기 2P, 새우 2P, 전복 1P, 가리비 1P)", "mainMenu"],
		//[10, "자부심초밥세트", "10_pride_sushi_set(10p).jpg", 15900, "10P(활어 3P, 연어 2P, 참치 2P, 새우 1P, 간장새우 1P, 장어 1P)", "mainMenu"],
		//[11, "이달의초밥세트", "11_thismonth_sushi_set(10p).jpg", 18000, "10P(계절마다 신선한 재료를 이용하여 만든 초밥)", "mainMenu"],
		//[12, "상무초밥세트", "12_sangmoo_sushi_set(10p).jpg", 20900, "10P(활어3, 연어1, 복육1, 메카도로1, 적신1, 전복1, 간장새우1, 장어1, 차완무시)", "mainMenu"],
		//[13, "특상무초밥세트", "13_sangmoo_special_sushi_set(17p).jpg", 29900, "초밥 10P+사시미 7P", "mainMenu"],
		//[14, "연어 + 소불고기초밥", "14_salmon_beef_sushi_set(8p).jpg", 16000, "연어 4P, 소고기불초밥 4P", "sushiSet"],
		//[15, "연어 + 참치초밥", "15_salmon_tuna_sushi_set(9p).jpg", 17500, "연어 4P, 참치 5P", "sushiSet"],
		//[16, "장어 + 소고기불초밥", "16_eel_beef_sushi_set(9p).jpg", 17500, "장어 4P, 소고기불초밥 4P", "sushiSet"],
		//[17, "활어 + 소고기불초밥", "17_livefish_beef_sushi_set(9p).jpg", 17500, "활어 5P, 소고기불초밥 4P", "sushiSet"],
		//[18, "활어 + 연어초밥", "18_livefish_salmon_sushi_set(9p).jpg", 17500, "활어 5P, 연어 4P", "sushiSet"],
		//[19, "활어 + 참치초밥", "19_livefish_tuna_sushi_set(10p).jpg", 19000, "활어 5P, 참치 5P", "sushiSet"],
		//[20, "활어초밥", "20_livefish_sushi_set(10p).jpg", 18000, "10P", "singleMenu"],
		//[21, "참치초밥", "21_tuna_sushi(10p).jpg", 18000, "10P", "singleMenu"],
		//[22, "장어초밥", "22_eel_sushi(8p).jpg", 18000, "8P", "singleMenu"],
		//[23, "연어초밥", "23_salmono_sushi(8p).jpg", 15000, "8P", "singleMenu"],
		//[24, "소고기불초밥", "24_beef_sushi(8p).jpg", 15000, "8P", "singleMenu"],
		//[25, "새우초밥", "25_shripm_sushi(10p).jpg", 11000, "10P", "singleMenu"],
		//[26, "광어묵은지초밥", "26_flatfish_kimchi_sushi(5p).jpg", 10000, "5P", "singleMenu"],
		//[27, "계란초밥", "27_egg_sushi(5p).jpg", 4000, "5P", "singleMenu"],
		//[28, "간장새우초밥", "28_soysauce_shrimp_sushi(5p).jpg", 8500, "5P", "singleMenu"],
		//[29, "유부초밥", "29_tofu_sushi(5p).jpg", 4000, "5P", "singleMenu"],
		//[30, "후토마끼", "30_hutomakki.jpg", 18000, "1줄", "singleMenu"],
		//[31, "장어초밥", "31_eel_sushi(1p).jpg", 2500, "1P", "1pcsMenu"],
		//[32, "참치초밥", "32_tuna_sushi(1p).jpg", 2000, "1P", "1pcsMenu"],
		//[33, "연어초밥", "33_salmon_sushi(1p).jpg", 2000, "1P", "1pcsMenu"],
		//[34, "소라초밥", "34_sora_sushi(1p).jpg", 1100, "1P", "1pcsMenu"],
		//[35, "황새치뱃살초밥", "35_swordfish_sushi(1p).jpg", 2500, "1P", "1pcsMenu"],
		//[36, "소고기불초밥", "36_beef_sushi(1p).jpg", 2000, "1P", "1pcsMenu"],
		//[37, "새우초밥", "37_shrimp_sushi(1p).jpg", 1100, "1P", "1pcsMenu"],
		//[38, "묵은지광어초밥", "38_flatfish_kimchi_sushi(1p).jpg", 2200, "1P", "1pcsMenu"],
		//[39, "도미초밥", "39_domi_sushi(1p).jpg", 2000, "1P", "1pcsMenu"],
		//[40, "광어초밥", "40_flatfish_sushi(1p).jpg", 2000, "1P", "1pcsMenu"],
		//[41, "광어지느러미초밥", "41_flatfish_pin_sushi(1p).jpg", 2500, "1P", "1pcsMenu"],
		//[42, "간장새우초밥", "42_soysauce_shrimp_sushi(1p).jpg", 1800, "1P", "1pcsMenu"],
		//[43, "활어회", "43_livefish_sasimi(small, big).jpg", 35000, "활어", "sasimi"],
		//[44, "특모듬회", "44_sasimi_special.jpg", 60000, "활어, 참치", "sasimi"],
		//[45, "참치회", "45_tuna_sasimi(small, big).jpg", 35000, "참치", "sasimi"],
		//[46, "연어회", "46_salmon_sasimi.jpg", 33000, "연어", "sasimi"],
		//[47, "1인 사시미", "47_personal_sasimi.jpg", 9900, "주류주문 필수", "sasimi"],
		//[48, "혼술세트", "48_drink_alone_set.jpg", 25000, "초밥 5P + 사시미 8P + 우동", "sasimi"],
		//[49, "지라시 덮밥", "49_jirashi_rice.jpg", 11000, " ", "sideMenu"],
		//[50, "카이센동", "50_kaisen_rice.jpg", 19000, " ", "sideMenu"],
		//[51, "특카이센동", "51_special_kaisen_rice.jpg", 29000, " ", "sideMenu"],
		//[52, "크림카레우동", "52_cream_curry_udon.jpg", 12000, " ", "sideMenu"],
		//[53, "가츠오우동", "53_gacho_udon.jpg", 6900, " ", "sideMenu"],
		//[54, "덴뿌라", "54_denbbura.jpg", 9900, " ", "sideMenu"],
		//[55, "왕새우튀김", "55_fried_shrimp.jpg", 20000, "5P", "sideMenu"],
		//[56, "돈까스", "56_pork_cutlet.jpg", 9900, " ", "sideMenu"],
		//[57, "도미머리구이", "57_domi_head_roast.jpg", 15000, " ", "sideMenu"],
		//[58, "메로구이", "58_mero_roast.jpg", 16000, " ", "sideMenu"],
		//[59, "연어머리구이", "59_salmon_head_roast.jpg", 15000, " ", "sideMenu"],
		//[60, "시라타키 준마이", "60_silataki_junmai.png", 30000, " ", "drinkMenu"],
		//[61, "상선여수 준마이", "61_junmai_1.jpg", 45000, " ", "drinkMenu"],
		//[62, "죠젠미즈노고토시 준마이다이긴죠", "62_junmai_2.png", 40000, " ", "drinkMenu"],
		//[63, "죠젠미즈노고토시 준마이긴죠", "63_junmai_3.jpg", 50000, " ", "drinkMenu"],
		//[64, "일품진로", "64_jinro_special.png", 20000, " ", "drinkMenu"],
		//[65, "아사히 생맥주", "65_asahi_beer.png", 6000, " ", "drinkMenu"],
		//[66, "복분자", "66_bokbunja.png", 10000, " ", "drinkMenu"],
		//[67, "매취순", "67_maechisun.jpg", 10000, " ", "drinkMenu"],
		//[68, "소주/맥주/청하", "68_any_drink.jpg", 6000, " ", "drinkMenu"]
	//];
	con.query(sql, (err, result) => {
		if (err) throw err;
		console.log('insert table');
	});
});
