import * as api from './api/index';


    export const UserData = [
        {
            name: 'Jan',
            "Active User": 10000,
        },
        {
            name: 'Feb',
            "Active User": 2000,
        },
        {
            name: 'Mar',
            "Active User": 7500,
        },
        {
            name: 'Apr',
            "Active User": 3000,
        },
        {
            name: 'May',
            "Active User": 8000,
        },
        {
            name: 'Jun',
            "Active User": 5000,
        },
        {
            name: 'Jul',
            "Active User": 5500,
        },
        {
            name: 'Aug',
            "Active User": 6000,
        },
        {
            name: 'Sep',
            "Active User": 2500,
        },
        {
            name: 'Oct',
            "Active User": 1000,
        },
        {
            name: 'Nov',
            "Active User": 9000,
        },
        {
            name: 'Dec',
            "Active User": 15000,
        },
      ];

      


      /*export const userRows = [ 
        { id: 1, username: 'Nawshad Nawas', 
        avatar:"https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png", 
        email:"nawshadhnawas@gmail.com",
        status:"Active",
        transaction:"$150.00",
        },

        { id: 2, username: 'Peter Parker', 
        avatar:"https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png", 
        email:"peterparker@gmail.com",
        status:"Active",
        transaction:"$200.00",
        },

        { id: 3, username: 'Bruce Wayne', 
        avatar:"https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png", 
        email:"notbatman@gmail.com",
        status:"Active",
        transaction:"$90000.00",
        },

        { id: 4, username: 'Himat Naimi', 
        avatar:"https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png", 
        email:"himatnaimi@gmail.com",
        status:"Active",
        transaction:"$500.00",
        },

        { id: 5, username: 'Amber Turd', 
        avatar:"https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png", 
        email:"amberturd@gmail.com",
        status:"Active",
        transaction:"$1.00",
        },
      ]; */

      export const userRows = async ()=>{
          
        const {data} = await api.fetchUsers();
        return data;
       
      }

      export const productRows = [ 
        { id: 1, name: 'Shoe', 
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        stock:"500",
        status:"Active",
        price:"$150.00",
        },

        { id: 2, name: 'Shoe', 
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        stock:"500",
        status:"Active",
        price:"$150.00",
        },

        { id: 3, name: 'Shoe', 
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        stock:"500",
        status:"Active",
        price:"$150.00",
        },

        { id: 4, name: 'Shoe', 
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        stock:"500",
        status:"Active",
        price:"$150.00",
        },

        { id: 5, name: 'Shoe', 
        img:"https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        stock:"500",
        status:"Active",
        price:"$150.00",
        },
      ];


      export const productData = [
        {
            name: 'Jan',
            "Sales": 10000,
        },
        {
            name: 'Feb',
            "Sales": 2000,
        },
        {
            name: 'Mar',
            "Sales": 7500,
        },
       
      ];
