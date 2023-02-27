const Student = (props) => {
    return(
        <div className='container p-2'>
            <div className='row border'>
                <div className='col-2'> 
                    <img className='w-100 py-2' src={props.pic} alt="Student's Avatar"/> 
                </div>
                <div className='col-5'> 
                    {props.name} <br/>
                    Coding Experience: {props.xp} years
                </div>
                <div className="col-2">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Student;