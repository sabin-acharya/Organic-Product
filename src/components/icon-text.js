const IconText = ({ icon:IconComponent, text }) => {
    return (
        <div className='d-flex align-items-center'>
              {IconComponent && <IconComponent style={{ width: '36px', height: '36px' }}/>} 
            
            <div>
                {text??''}
            </div>
        </div>
    )
} 
export default IconText;
