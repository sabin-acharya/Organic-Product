const IconText = ({ icon, text }) => {
    return (
        <div className='d-flex align-items-center'>
            <img src={icon} style={{ width: '36px', height: '36px' }} />
            <div>
                {text??''}
            </div>
        </div>
    )
} 
export default IconText;
