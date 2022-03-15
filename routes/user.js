var express = require('express');
const { redirect } = require('express/lib/response');
const { render } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.user){
    console.log("session checked");
    bikes=[
      {
      photo:"./images/1.jpeg",
      name:"Himalayan",
      Price:"180000"
      },
      {
      photo:"images/2.jpeg",
      name:"Rx 100",
      Price:"80000"
      },
      {
      photo:"images/5.jpeg",
      name:"Intercepter 650",
      Price:"300000"
      },
      {
      photo:"images/4.jpeg",
      name:"Dominor",
      Price:"240000"
  
      },
      {
      photo:"images/5.jpeg",
      name:"Rudra 650",
      Price:"450000"
  
      },
      {
      photo:"images/1.jpeg",
      name:"GT 650",
      Price:"350000"
  
      },
      {
      photo:"images/8.jpeg",
      name:"Himalayan",
      Price:"250000"
  
      },
      {
      photo:"images/9.jpeg",
      name:"Mahindra Mojo",
      Price:"250000"
  
      },
      {
      photo:"images/10.jpeg",
      name:"Himalayan 400",
      Price:"150000"
  
      },
      {
        photo:"./images/1.jpeg",
        name:"Himalayan",
        Price:"180000"
        },
        {
        photo:"images/2.jpeg",
        name:"Rx 100",
        Price:"80000"
        },
        {
        photo:"images/5.jpeg",
        name:"Intercepter 650",
        Price:"300000"
        },
        {
        photo:"images/4.jpeg",
        name:"Dominor",
        Price:"240000"
  
        },
        {
        photo:"images/5.jpeg",
        name:"Rudra 650",
        Price:"450000"
  
        },
        {
        photo:"images/1.jpeg",
        name:"GT 650",
        Price:"350000"
  
        },
        {
        photo:"images/8.jpeg",
        name:"Himalayan",
        Price:"250000"
  
        },
        {
        photo:"images/9.jpeg",
        name:"Mahindra Mojo",
        Price:"250000"
  
        },
        {
        photo:"images/10.jpeg",
        name:"Himalayan 400",
        Price:"150000"
  
        }
      ]
    
    res.render("user/user-home",{bikes})
   
  }
  else{
    res.redirect('/login')
  }
});


router.post('/login-p',function(req,res,next){
  
  
  var Username= req.body.Name
  var Password=req.body.Password
  if(Username=="reshin"&&Password=="password"){
    req.session.user=Username
  
  res.redirect('/')
  }
  else if(Username=="admin"&&Password=="admin")
  {
   req.session.admin=Username

   
    let items=[
      {
        no:1,
        name:"Dazler",
        price:18000,
        photo:"/images/1.jpeg"
      },
      {
        no:2,
        name:"Rx 100",
        price:70000,
        photo:"/images/2.jpeg"
      },
      {
        no:3,
        name:"Dominor",
        price:170000,
        photo:"/images/4.jpeg"
      },
      {
        no:4,
        name:"Rudra",
        price:370000,
        photo:"/images/5.jpeg"
      },
      {
        no:5,
        name:"Mahindra Mojo",
        price:170000,
        photo:"/images/6.jpeg"
      }
      ,
      {
        no:6,
        name:"Intercepter",
        price:170000,
        photo:"/images/7.jpeg"
      },
      {
        no:7,
        name:"Himalayan",
        price:770000,
        photo:"/images/8.jpeg"
      },{
        no:8,
        name:"Dazler",
        price:18000,
        photo:"/images/1.jpeg"
      },
      {
        no:9,
        name:"Rx 100",
        price:70000,
        photo:"/images/2.jpeg"
      },
      {
        no:10,
        name:"Dominor",
        price:170000,
        photo:"/images/4.jpeg"
      },
      {
        no:11,
        name:"Rudra",
        price:370000,
        photo:"/images/5.jpeg"
      },
      {
        no:12,
        name:"Mahindra Mojo",
        price:170000,
        photo:"/images/6.jpeg"
      }
      ,
      {
        no:13,
        name:"Intercepter",
        price:170000,
        photo:"/images/7.jpeg"
      },
      {
        no:14,
        name:"Himalayan",
        price:770000,
        photo:"/images/8.jpeg"
      },
      {
        no:15,
        name:"Dazler",
        price:18000,
        photo:"/images/1.jpeg"
      },
      {
        no:16,
        name:"Rx 100",
        price:70000,
        photo:"/images/2.jpeg"
      },
      {
        no:17,
        name:"Dominor",
        price:170000,
        photo:"/images/4.jpeg"
      },
      {
        no:18,
        name:"Rudra",
        price:370000,
        photo:"/images/5.jpeg"
      },
      {
        no:19,
        name:"Mahindra Mojo",
        price:170000,
        photo:"/images/6.jpeg"
      }
      ,
      {
        no:20,
        name:"Intercepter",
        price:170000,
        photo:"/images/7.jpeg"
      },
      {
        no:21,
        name:"Himalayan",
        price:770000,
        photo:"/images/8.jpeg"
      },{
        no:22,
        name:"Dazler",
        price:18000,
        photo:"/images/1.jpeg"
      },
      {
        no:23,
        name:"Rx 100",
        price:70000,
        photo:"/images/2.jpeg"
      },
      {
        no:24,
        name:"Dominor",
        price:170000,
        photo:"/images/4.jpeg"
      },
      {
        no:25,
        name:"Rudra",
        price:370000,
        photo:"/images/5.jpeg"
      },
      {
        no:26,
        name:"Mahindra Mojo",
        price:170000,
        photo:"/images/6.jpeg"
      }
      ,
      {
        no:27,
        name:"Intercepter",
        price:170000,
        photo:"/images/7.jpeg"
      },
      {
        no:28,
        name:"Himalayan",
        price:770000,
        photo:"/images/8.jpeg"
      }
    ]
     res.render('admin/admin-home',{items})
  }
  else{
    err="incorrect username or password"
    res.render('user/user-login',{err})
  }
})
router.get('/login',function(req,res,next){
 
          if(req.session.user){
            
            res.redirect('/')
          }else if(req.session.admin){
            let items=[
              {
                no:1,
                name:"Dazler",
                price:18000,
                photo:"/images/1.jpeg"
              },
              {
                no:2,
                name:"Rx 100",
                price:70000,
                photo:"/images/2.jpeg"
              },
              {
                no:3,
                name:"Dominor",
                price:170000,
                photo:"/images/4.jpeg"
              },
              {
                no:4,
                name:"Rudra",
                price:370000,
                photo:"/images/5.jpeg"
              },
              {
                no:5,
                name:"Mahindra Mojo",
                price:170000,
                photo:"/images/6.jpeg"
              }
              ,
              {
                no:6,
                name:"Intercepter",
                price:170000,
                photo:"/images/7.jpeg"
              },
              {
                no:7,
                name:"Himalayan",
                price:770000,
                photo:"/images/8.jpeg"
              },{
                no:8,
                name:"Dazler",
                price:18000,
                photo:"/images/1.jpeg"
              },
              {
                no:9,
                name:"Rx 100",
                price:70000,
                photo:"/images/2.jpeg"
              },
              {
                no:10,
                name:"Dominor",
                price:170000,
                photo:"/images/4.jpeg"
              },
              {
                no:11,
                name:"Rudra",
                price:370000,
                photo:"/images/5.jpeg"
              },
              {
                no:12,
                name:"Mahindra Mojo",
                price:170000,
                photo:"/images/6.jpeg"
              }
              ,
              {
                no:13,
                name:"Intercepter",
                price:170000,
                photo:"/images/7.jpeg"
              },
              {
                no:14,
                name:"Himalayan",
                price:770000,
                photo:"/images/8.jpeg"
              },
              {
                no:15,
                name:"Dazler",
                price:18000,
                photo:"/images/1.jpeg"
              },
              {
                no:16,
                name:"Rx 100",
                price:70000,
                photo:"/images/2.jpeg"
              },
              {
                no:17,
                name:"Dominor",
                price:170000,
                photo:"/images/4.jpeg"
              },
              {
                no:18,
                name:"Rudra",
                price:370000,
                photo:"/images/5.jpeg"
              },
              {
                no:19,
                name:"Mahindra Mojo",
                price:170000,
                photo:"/images/6.jpeg"
              }
              ,
              {
                no:20,
                name:"Intercepter",
                price:170000,
                photo:"/images/7.jpeg"
              },
              {
                no:21,
                name:"Himalayan",
                price:770000,
                photo:"/images/8.jpeg"
              },{
                no:22,
                name:"Dazler",
                price:18000,
                photo:"/images/1.jpeg"
              },
              {
                no:23,
                name:"Rx 100",
                price:70000,
                photo:"/images/2.jpeg"
              },
              {
                no:24,
                name:"Dominor",
                price:170000,
                photo:"/images/4.jpeg"
              },
              {
                no:25,
                name:"Rudra",
                price:370000,
                photo:"/images/5.jpeg"
              },
              {
                no:26,
                name:"Mahindra Mojo",
                price:170000,
                photo:"/images/6.jpeg"
              }
              ,
              {
                no:27,
                name:"Intercepter",
                price:170000,
                photo:"/images/7.jpeg"
              },
              {
                no:28,
                name:"Himalayan",
                price:770000,
                photo:"/images/8.jpeg"
              }
            ]
               res.render('admin/admin-home',{items})
          }
          else{
       res.render("user/user-login")
          }
   
})



router.get('/logout',function(req,res){
  if(req.session.user)
  {
    req.session.user=null
    res.redirect('/login')
  }
  else if(req.session.admin){
    req.session.admin=null
    res.redirect('/login')
  }
  
})

























module.exports = router;
