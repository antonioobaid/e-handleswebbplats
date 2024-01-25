export const Forminput = ({className, label, errormsg, ...rest  }) => {
  
  
    return (
       
       <div className={` form-group ${className}`}>
           <label htmlFor="Name" className="form-label" > {label} </label>
           <input  className="form-input" {...rest} />
            { errormsg && <p className="Invalid-input">{errormsg}</p>} 
       </div> 
  )
}


