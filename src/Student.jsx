function Student(props){
    return(
        <div className='container p-4'>
        <div className='row border'>
            <div className='col-2'> Image </div>
            <div className='col-5'> Full Name </div>
            <div className='col-5'> Coding Experience </div>
        </div>
        <div className='row border'>
            <div className='col-2'> <img className='w-100 py-2' src={props.pic} alt="Student's Avatar"/> </div>
            <div className='col-5'> {props.name} </div>
            <div className='col-5'> {props.xp} years </div>
        </div>
        </div>
    )
}
export default Student;