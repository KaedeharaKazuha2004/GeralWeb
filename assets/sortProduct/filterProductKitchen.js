var KitchenProduct = [
    {
        id: "101",
        type: "Bàn ăn",
        name: "Bộ bàn ăn gỗ 4 đế cao su",
        price_before: 12500000,
        price_after: 9250200,
        photo: "images/products/phong_bep/bo_ban_an.jpg"
    },
    {
        id: "102",
        type: "Bàn ăn",
        name: "Bộ bàn ghế ăn 4 người gỗ cao su chân sắt CBBA029",
        price_before: 5300000,
        price_after: 4015000,
        photo: "images/products/phong_bep/bo_ban_an_8.jpg"
    },
    {
        id: "103",
        type: "Bàn ăn",
        name: "Bộ bàn ăn 4 ghế gỗ",
        price_before: 5300000,
        price_after: 4015000,
        photo: "images/products/phong_bep/bo_ban_an2.jpg"
    },
    {
        id: "104",
        type: "Bàn ăn",
        name: "Bộ bàn ăn gỗ thông 160cm và 6 ghế Bixtro CBBA074",
        price_before: 7699000,
        price_after: 5725000,
        photo: "images/products/phong_bep/bo_ban_an_7.jpeg"
    },
    {
        id: "105",
        type: "Bàn ăn",
        name: "Bộ bàn ăn 4 ghế tựa lưng gỗ",
        price_before: 5200000,
        price_after: 3250000,
        photo: "images/products/phong_bep/bo_ban_an3.jpg"
    },
    {
        id: "106",
        type: "Bàn ăn",
        name: "Bộ bàn ăn đường kính 1m và 4 ghế da CBBA110",
        price_before: 5999000,
        price_after: 3600000,
        photo: "images/products/phong_bep/bo_ban_an_62.jpeg"
    },
    {
        id: "107",
        type: "Bàn ăn",
        name: "Bộ bàn ăn 6 ghế màu vàng BA-07",
        price_before: 2700000,
        price_after: 2500000,
        photo: "images/products/phong_bep/bo_ban_an4.jpg"
    },
    {
        id: "108",
        type: "Bàn ăn",
        name: "Bộ bàn ăn mặt gỗ và 6 ghế nệm bọc vải",
        price_before: 7100000,
        price_after: 6200000,
        photo: "images/products/phong_bep/bo_ban_an_61.jpg"
    },
    {
        id: "109",
        type: "Bàn ăn",
        name: "Bộ bàn ăn mặt đá 140 x 80cm và 4 ghế ăn",
        price_before: 5200000,
        price_after: 4500000,
        photo: "images/products/phong_bep/bo_ban_an_5.jpg"
    },
    {
        id: "110",
        type: "Tủ bếp",
        name: "Tủ bếp trên 1,2m nhỏ gọn gỗ cao su",
        price_before: 3500000,
        price_after: 3150000,
        photo: "images/products/phong_bep/tu_bep_3.jpg"
    },
    {
        id: "111",
        type: "Tủ bếp",
        name: "Tủ bếp trên 1,2m gỗ cao su cửa lưới",
        price_before: 3800000,
        price_after: 3420000,
        photo: "images/products/phong_bep/tu_bep_4.jpg"
    },
    {
        id: "112",
        type: "Tủ bếp",
        name: "Tủ bếp dưới 1,2m gỗ cao su cửa dưới có viền",
        price_before: 5500000,
        price_after: 4950000,
        photo: "images/products/phong_bep/tu_bep_5.jpg"
    },
    {
        id: "113",
        type: "Tủ bếp",
        name: "Tủ bếp trên 1,2m gỗ cao su cửa không viền",
        price_before: 6200000,
        price_after: 5580000,
        photo: "images/products/phong_bep/tu_bep_7.jpg"
    },
    {
        id: "114",
        type: "Tủ bếp",
        name: "Hệ tủ bếp mini gỗ cao su BTB68012",
        price_before: 8800000,
        price_after: 7920000,
        photo: "images/products/phong_bep/tu_bep_8.jpg"
    },
    {
        id: "115",
        type: "Tủ bếp",
        name: "Hệ tủ bếp mini gỗ cao su nhỏ gọn BTB68006",
        price_before: 8800000,
        price_after: 7920000,
        photo: "images/products/phong_bep/tu_bep_9.jpg"
    },
    {
        id: "116",
        type: "Tủ bếp",
        name: "Tủ bếp trên 1,2m gỗ cao su cửa không viền",
        price_before: 9790000,
        price_after: 8810000,
        photo: "images/products/phong_bep/tu_bep_10.jpg"
    },
    {
        id: "117",
        type: "Tủ bếp",
        name: "COMBO Bếp mini 1,2m Geral",
        price_before: 9200000,
        price_after: 9200000,
        photo: "images/products/phong_bep/tu_bep.webp"
    },
    {
        id: "118",
        type: "Tủ bếp",
        name: "Hệ Tủ Bếp Geral",
        price_before: 25550000,
        price_after: 22000000,
        photo: "images/products/phong_bep/tu_bep2.webp"
    },
];

if (localStorage.getItem("KitchenProduct") == undefined) {
    localStorage.setItem("KitchenProduct", JSON.stringify(KitchenProduct));
}


