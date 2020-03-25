class CalcController{
    // classe é um conjunto de atributos e métodos


    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
        setInterval(() => {

            this.displayDate = this.currentDate.toLocaleDateString(this._locale , {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);


        }, 1000);

    
    
    }

    initButtonsEvents(){
     let buttons = document.querySelector("#buttons > g , #parts > g");
     buttons.forEach((btn , index) => { btn.addEventListener('click' , e =>{
             console.log(e)

         });
     })
    }



    get displayTime(){
        return this._timeEl.innerHTML;

    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;

    }

    get displayDate(){
        return this._dateEl.innerHTML;

    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;

    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = valor;  
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
         this.currentDate = valor;
    }

}