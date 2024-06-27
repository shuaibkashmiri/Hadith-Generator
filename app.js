const english=document.querySelector('.english');
const book=document.querySelector('.book'); 

const button=document.querySelector('.btn')




    function getHadith(){
        let random=Math.ceil(Math.random()*25)
        const xhr=new XMLHttpRequest;
        xhr.open('GET','https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$N3Xs2tW3qMFwQOU0rxyZ6pEHRkarmvlh4239pYDwNdkMgRiu8n')
        xhr.onreadystatechange=()=>{
            if(xhr.readyState == 4){
               
                let data =JSON.parse(xhr.responseText);
                console.log(data);
                book.textContent=`Book ${data.hadiths.data[random].book.bookName}`
                english.textContent=`${data.hadiths.data[random].englishNarrator}  ${data.hadiths.data[random].hadithEnglish}`;
            }
        }
        xhr.send();
    }

    button.addEventListener('click',getHadith)

    