 

function display(){
    const input=document.getElementById("input");
    const city=input.options[input.selectedIndex].value;
    let population=0, literacyRate=0, language='';
            switch (city) {
                case 'Chennai':
                    population = '7.1 million';
                    literacyRate = '90.33%';
                    language = 'Tamil';
                    break;
                case 'Bengalore':
                    population = '8.4 million';
                    literacyRate = '89%';
                    language = 'Kannada';
                    break;
                case 'Mumbai':
                    population = '12.5 million';
                    literacyRate = '89.73%';
                    language = 'Marathi';
                    break;
                case 'Delhi':
                    population = '19 million';
                    literacyRate = '86.34%';
                    language = 'Hindi';
                    break;
                case 'Kolkata':
                    population = '4.5 million';
                    literacyRate = '87.14%';
                    language = 'Bengali';
                    break;
                case 'Hyderabad':
                    population = '6.9 million';
                    literacyRate = '83.25%';
                    language = 'Telugu';
                    break;
                case 'Pune':
                    population = '3.1 million';
                    literacyRate = '89.56%';
                    language = 'Marathi';
                    break;
                case 'Ahmedabad':
                    population = '8 million';
                    literacyRate = '88.29%';
                    language = 'Gujarati';
                    break;
                case 'Jaipur':
                    population = '3.1 million';
                    literacyRate = '84.83%';
                    language = 'Hindi';
                    break;
                case 'Surat':
                    population = '6 million';
                    literacyRate = '86.65%';
                    language = 'Gujarati';
                    break;
                case 'Lucknow':
                    population = '3.5 million';
                    literacyRate = '84.72%';
                    language = 'Hindi';
                    break;
                case 'Indore':
                    population = '2.1 million';
                    literacyRate = '86.01%';
                    language = 'Hindi';
                    break;
                case 'Bhopal':
                    population = '1.9 million';
                    literacyRate = '85.24%';
                    language = 'Hindi';
                    break;
                case 'Coimbatore':
                    population = '1.6 million';
                    literacyRate = '91.30%';
                    language = 'Tamil';
                    break;
                case 'Vijayawada':
                    population = '1.7 million';
                    literacyRate = '82.59%';
                    language = 'Telugu';
                    break;
                default:
                    population = 'Unknown';
                    literacyRate = 'Unknown';
                    language = 'Unknown';
                    break;
    }
    let text=`THe Indian city of ${city} has a population ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}`;
    let resultdiv=document.createElement('div');

    resultdiv.id='result'; //this is for styling in css
    document.getElementById('wrapper').appendChild(resultdiv);
    document.getElementById('result').innerHTML=text;


}