import Daily_Img from '../images/Daily_Img.jpeg';
import Medical_Img from '../images/Medical_Img.jpeg';
import Sport_Img from '../images/Sport_Img.jpeg';
import ToRecover_Img from '../images/ToRecover_Img.jpeg';
import ToSki_Img from '../images/ToSki_Img.jpeg';
import ToTravel_Img from '../images/ToTravel_Img.jpeg';
import ToWalk_Img from '../images/ToWalk_Img.jpeg';

const MenuSlideData = [
    {
        title: 'Daily',
        image: Daily_Img,
    },
    {
        title: 'Sport',
        image: Sport_Img,
    },
    {
        title: 'Ski',
        image: ToSki_Img,
    },
    {
        title: 'Travel',
        image: ToTravel_Img,
    },
    {
        title: 'Recover',
        image: ToRecover_Img,
    },
    {
        title: 'Walk',
        image: ToWalk_Img,
    },
    {
        title: 'Medical',
        image: Medical_Img,
    },
]

const DropdownData = [
    {
        title: 'Daily',
        options: [
            {
                name: "Men's Daily",
                stock: "14",
            },
            {
                name: "Women's Daily",
                stock: "33",
            },
            {
                name: "Kid's Daily",
                stock: "10",
            },
            {
                name: "See All Daily",
                stock: "57",
            }
        ],
    },
    {
        title: 'Sport',
        options: [
            {
                name: "Men's Sport",
                stock: "22",
            },
            {
                name: "Women's Sport",
                stock: "22",
            },
            {
                name: "Kid's Sport",
                stock: "12",
            },
            {
                name: "Recover",
                stock: "4",
            },
            {
                name: "Run",
                stock: "9",
            },
            {
                name: "Ski",
                stock: "5",
            },
            {
                name: "Walk",
                stock: "15",
            },
            {
                name: "Weight Lift",
                stock: "20",
            },
            {
                name: "See All Sport",
                stock: "56",
            }
        ]
    },
    {
        title: 'Travel',
        options: [
            {
                name: "Men's Travel",
                stock: "8",
            },
            {
                name: "Women's Travel",
                stock: "8",
            },
            {
                name: "Kid's Travel",
                stock: "4",
            },
            {
                name: "See All Travel",
                stock: "20",
            }
        ]
    }
]

const MenuData = {
    MenuSlideData,
    DropdownData
}

export default MenuData;