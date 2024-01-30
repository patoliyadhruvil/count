import { useState } from "react";
import "./Count.css";
import Ref from "../Ref/Ref";
import Plus from "../Plus/Plus";

const product = [
  {
    "id": 1,
    "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
    "price": 100000,
    "image": "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
  },
    {
        "id" : 2,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 9000,
        "image" : "https://5.imimg.com/data5/SELLER/Default/2023/3/295475972/FT/MJ/IY/14348518/hello-watch-2-men-smart-watch-h11-ultra-upgraded-2-02-inch-nfc-compass-smartwatch-with-1gb-rom-500x500.png",


        },
    {
        "id" : 3,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 10000,
        "image" : "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/f/x/c/-original-imaghvb6kgjbv2ff.jpeg?q=90",


    },
    {
        "id" : 4,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 30000,
        "image" : "https://images.samsung.com/is/image/samsung/p6pim/in/feature/others/in-feature-galaxy-a14-5g-sm-a146-535009735?cid=in_pd_affiliate_other_all_none_samsungeshopfest2022_notification_20220701_none-1ur-501409l-2022",


    },
    {
        "id" : 5,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 40000,
        "image" : "https://www.gizchina.com/wp-content/uploads/images/2023/06/IMG_4662.jpg",


    },
    {
        "id" : 6,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 90000,
        "image" : "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",


    },
    {
        "id" : 7,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 20000,
        "image" : "https://www.businessinsider.in/thumb.cms?msid=95257793&width=1200&height=900",


    },
    {
        "id" : 8,
        "des": "Mobile comes standard with us; it’s a must for ecommerce. On average, one in four of your customers will visit your store on a mobile device.",
        "price" : 15000,
        "image" : "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/tablets-20230518/matepad-pro-series/matepad-pro-series-card-1.jpg",


    }
    ];

const Count = () => {

  return (
    <div>
      <div className="container">
        <div className="row">
          {product.map((product) => (
            <div className="col-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <img src={product.image} alt="img" className="mb-4 "/>
                  <p>{product.des}</p>
                  <h2>Price: {product.price}</h2>
                  <Ref/>
                  <Plus/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
