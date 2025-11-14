import React from 'react'

const Boys = () => {
  const cakes=["https://cdn.pixabay.com/photo/2020/03/10/03/49/red-velvet-cake-4917734_1280.jpg","https://cdn.pixabay.com/photo/2021/05/29/06/22/cake-6292578_1280.jpg","https://whipped.in/cdn/shop/files/LavenderGarden_900x.jpg?v=1750502189","https://cdn.pixabay.com/photo/2021/03/29/05/44/cake-6133054_1280.jpg","https://cdn.pixabay.com/photo/2019/01/28/10/08/red-velvet-cake-3960016_1280.jpg","https://cdn.pixabay.com/photo/2019/12/18/10/27/cake-4703609_1280.jpg","https://cdn.pixabay.com/photo/2019/01/28/10/01/carrot-cake-3960001_1280.jpg","https://cdn.pixabay.com/photo/2015/03/20/01/47/birthday-681660_1280.jpg","https://cdn.pixabay.com/photo/2024/08/22/09/51/birthday-cake-8988893_1280.jpg","https://cdn.pixabay.com/photo/2017/07/21/18/02/birthday-party-2526640_1280.jpg","https://cdn.pixabay.com/photo/2014/05/16/16/40/cake-345657_1280.jpg","https://cdn.pixabay.com/photo/2014/09/10/21/46/cake-441144_1280.jpg","https://cdn.pixabay.com/photo/2023/12/26/11/46/cake-8470015_1280.jpg","https://cdn.pixabay.com/photo/2024/12/13/20/39/cake-9266139_1280.jpg","https://cdn.pixabay.com/photo/2017/08/16/00/41/cake-2646108_1280.jpg","https://cdn.pixabay.com/photo/2023/12/26/11/46/cake-8470014_1280.jpg","https://cdn.pixabay.com/photo/2012/02/23/20/25/celebration-16302_1280.jpg","https://cdn.pixabay.com/photo/2023/02/01/12/48/heart-shaped-cake-7760388_1280.jpg","https://cruff.in/cdn/shop/files/42273.jpg?v=1741774051","https://imgcdn.floweraura.com/red-velvet-heart-photo-anniversary-cake-9802140ca-AAA.jpg","https://chocolaparis.qa/cdn/shop/files/new15.webp?v=1747907106","https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-fcd1e37/yummycake.in/wp-content/uploads/2023/10/5th-wedding-anniversary-cake.jpg","https://i.pinimg.com/originals/26/52/24/2652245e6307b63ab6907cfbe4c21e17.jpg"]
  return (
    <div id='main_container'>/
      <div id='container' >
        {
          cakes.map((cake)=>(
            <div style={{ width: "auto", height: "auto", borderRadius: "50%", objectFit: "cover", cursor: "pointer" ,}} >
              <img src={cake}alt="" style={{ width: "200px", height: "200px", borderRadius: "20px", objectFit: "cover", cursor: "pointer" }} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Boys
