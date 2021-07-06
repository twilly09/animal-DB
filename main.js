// 동물 DB
const petData = [
  { 
    imgUrl: 'images/상아1.jpg', // 이미지 주소
    name: "언니기다리는상아", // 동물 이름
    type: "dog"
  },
  { 
    imgUrl: 'images/상아2.jpg',
    name: "상아와개나리",
    type: "dog"
  },
  { 
    imgUrl: 'images/상아3.jpg',
    name: "3개월 상아",
    type: "dog"
  },
  { 
    imgUrl: 'images/상아4.jpg',
    name: "볼뚠뚜니상아",
    type: "dog"
  },
  { 
    imgUrl: 'images/상아5.jpg',
    name: "그냥예쁜상아",
    type: "dog"
  },
  { 
    imgUrl: 'images/상아6.jpg',
    name: "개아련상아",
    type: "dog"
  },
  { 
    imgUrl: 'images/가을2.jpg',
    name: "2개월가을",
    type: "cat"
  },
  { 
    imgUrl: 'images/가을3.jpg',
    name: "집중하는가을",
    type: "cat"
  },
  { 
    imgUrl: 'images/가을4.jpg',
    name: "잠에취한가을",
    type: "cat"
  },
  { 
    imgUrl: 'images/석봉1.jpg',
    name: "차도잘타석봉",
    type: "cat"
  },
  { 
    imgUrl: 'images/석봉2.jpg',
    name: "엄마품석봉",
    type: "cat"
  },
  { 
    imgUrl: 'images/석봉3.jpg',
    name: "늘어진석봉",
    type: "cat"
  },
  { 
    imgUrl: 'images/bird01.jpg',
    name: "새1",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird02.jpg',
    name: "새2",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird03.jpg',
    name: "새3",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird04.jpg',
    name: "새4",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird05.jpg',
    name: "새5",
    type: "bird"
  },
  { 
    imgUrl: 'images/bird06.jpg',
    name: "새6",
    type: "bird"
  },
];

function getPetData(type) {
  var html = ''; // html 변수
    // 동물 데이터 불러오기
    for(var i = 0; i < petData.length; i++) {
      if(petData[i].type == type ){
        html += `
        <li>
          <a href="#">
            <img 
              src="${petData[i].imgUrl}"
              alt="${petData[i].name}"
            >
            <div class="caption">
              <h4>${petData[i].name}</h4>
            </div>
          </a>
        </li>` 
      }
    }

    // html 목록 출력
    $('.pet-list').html(html)
}


/* 메인 함수 */
$(function(){
  // 현재 페이지 URL값에서 type 값을 가져오기
  var query = location.search.split('=');
  var type = query[1]
  console.log(query[1]);

  // 동물 출력 함수 : getPetData(type)
  // undefined는 전달된 값이 없을때 기본 데이터(개)
  if(query[1] == undefined) {
    getPetData('dog');
  } else {
    getPetData(type); 
  }
  
});
