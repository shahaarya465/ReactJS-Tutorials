function Eventdemo() {
    const demo = () => {
        alert("Welcome");
    }

    const printdata = (event) => {
        console.log(event.type);
        console.log(event.target.value);
    }

    return (<>
        <input type='button' onClick={demo} value='Click Me' />
        <input type='button' onClick={() => alert("Inline")} value = 'Inline' />
        <input type='button' name="btn1" value='Btn1' onClick={printdata} />
    </>)
}
export default Eventdemo;