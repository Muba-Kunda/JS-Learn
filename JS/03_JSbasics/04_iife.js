// Immediately Invoked Function Expression 

(function chai(){
    console.log("DB Connected");
})();

( () => (console.log("DB Connected Two")) )();

( (name) => {
    console.log(`DB Connected Three ${name}`);
} )("Mubaraka");