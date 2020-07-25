let currentTime = new Date().toLocaleTimeString();
let messageIndex = 0;

function addMessage(){
    let currentTime = new Date().toLocaleTimeString();
    console.log("User Time");
    event.preventDefault();

    const formControl = document.querySelector('.form');
    console.log(formControl.value);
    let messageId ="message-" + messageIndex;                              //add Id for incremntor later
    const newUserMessage = 
        (`<span>${currentTime}</span><span class="sender">Me:</span><span>${formControl.value}</span><span class="delete" onClick="deleteItem('${messageId}')">❌</span>`);

        const span2 = document.createElement("div");                       //creates new division which will be our message
        span2.classList.add("message");                                    //grants the class of 'message' to new div
        span2.setAttribute("id", `${messageId}`)                           //sets the incremental Id so that they may be deleted
        span2.innerHTML =newUserMessage;                                   //innerHTML's the html into new div
        const chatbox = document.querySelector('#chatbox');                //selects '#chatbox' div to use as parent. this appplies the existing CSS
        chatbox.appendChild(span2);                                        //appends child

        messageIndex++;
        document.querySelector("form").reset();                            //resets textbox
}
document.querySelector("form").addEventListener('submit', addMessage);     //allows function to run on webpage

function chuckJokeAdd(){
    let currentTime = new Date().toLocaleTimeString();
    console.log("Chuck Time");
    event.preventDefault();
    fetch('https://api.chucknorris.io/jokes/search?query=kick').then(
            resp => { 
            return resp.json();
            }
        ).then(
            function (data) {
            let chuckNorrisJokes = data.result;                              //result is the name of the parent of all the jokes
            let randomN = Math.floor(Math.random()* chuckNorrisJokes.length) //generate random number for random response
            let generatedJoke = chuckNorrisJokes[randomN].value;             // will output random joke
            let messageId ="message-" + messageIndex;                        //add Id for incremntor later
            const newLonelyMessage = 
            (`<span>${currentTime}</span><span class="sender">Rod:</span><span>${generatedJoke}</span><span class="delete" onClick="deleteItem('${messageId}')">❌</span>`); //inserted html
            
            

            const span1 = document.createElement("div");                      //creates new division which will be our message
            span1.classList.add("message");                                   //grants the class of 'message' to new div
            span1.setAttribute("id", `${messageId}`)                          //sets the incremental Id so that they may be deleted
            span1.innerHTML =newLonelyMessage;                                //innerHTML's the html into new div
            const chatbox = document.querySelector('#chatbox');               //selects '#chatbox' div to use as parent. this appplies the existing CSS
            chatbox.appendChild(span1);                                       //appends child

            messageIndex++;
            }
        ).catch(
            error => console.log(error)
        );
}
document.querySelector("button").addEventListener('click', chuckJokeAdd);      //allows function to run on webpage

function deleteItem(id) {                                                      //uses incrementing Id to delete individul messages with the "X" span.
    console.log("DeleteItem", id);
    const rowEl = document.getElementById(id);
    rowEl.remove();
  }
  