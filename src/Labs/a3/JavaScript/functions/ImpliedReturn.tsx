const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    
function ImpliedReturn() {
    return (
        <>
         <h3>Implied return</h3>
         fourTimesFive = {multiply}<br />
         multiply(4, 5) = {multiply(3, 1)}<br />
        </>
       )
}
export default ImpliedReturn;