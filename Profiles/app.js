let data = [
    {
        name: 'Fathi',
        age: '22'
    },
    {
        name: 'Zak',
        age: '18'
    },
    {
        name: 'Siham',
        age: '14'
    },
    {
        name: 'Sumeya',
        age: '13'
    },
    {
        name: 'Hamza',
        age: '10'
    },
    {
        name: 'Sabrina',
        age: '17'
    }
];

const info = document.querySelector('#info');
 
let details = data.map(function(item){
    return '<div>' + item.name + '' + 'is ' + item.age + 'years old' + '</div>';
});
