function Youtube(props)
{
    return(
        <>
        
<div className="setcard">
              <div className="card" style={{width: 300}}>
                <iframe width="300" height="315" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="card-body">
            <center>      <h5 className="card-title">{props.title}</h5>
                 </center></div>
              </div>
              </div>
              
        </>
    );
}

export default Youtube;