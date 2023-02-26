function Student(){
    const fullname = "Chrisanthi Mihelioudakis";
    const xp = 2;
    return(
        <div className='container p-4'>
        <div className='row border'>
            <div className='col-2'> Image </div>
            <div className='col-5'> Full Name </div>
            <div className='col-5'> Coding Experience </div>
        </div>
        <div className='row border'>
            <div className='col-2'> <img className='w-100' src={`https://ui-avatars.com/api/?name=${fullname}`} alt="Student's Avatar"/> </div>
            <div className='col-5'> {fullname} </div>
            <div className='col-5'> {xp} years </div>
        </div>
        </div>
    )
}
export default Student;