const birthDate=document.getElementById('birthday');
const button=document.getElementById('btn');
const result=document.getElementById('result');
button.addEventListener('click',calculateAge)

function calculateAge(){
    const birthdayValue=birthDate.value
    if(birthdayValue===''){
        alert('enter a date')
    }
    else{
        const age =getAge(birthdayValue)
        result.innerHTML=`your age is ${age}`
    }


    // console.log(birthdayValue)
}


function getAge(Value){
         const currentdate=new Date()
         const birthdayDate=new Date(Value)
         
         
         const years=currentdate.getFullYear()-birthdayDate.getFullYear()
         if(years<0||years>120){
            alert(`${birthdayDate} is not valid `)
         }


         
         return years;
        }