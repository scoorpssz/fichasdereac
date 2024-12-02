
export const Content = (props) => {
    return (
    <div>
    <title>Top-3 Treinos favoritos</title>

    <div className="training">
        {/* Treino  1 */}
        <div className="train-box">
        <img 
            src="https://s3assets.skimble.com/assets/2289486/image_iphone.jpg"
            alt="Bench Press"
            />  
            <p>Bench Press</p>  
        </div>

        {/* Treino  2 */}
        <div className="train-box">
        <img 
            src="https://lyfta.app/thumbnails/02391201.jpg"
            alt="Straight Back Seated Row"
            /> 
            <p>Straight Back Seated Row</p>   
        </div>

        {/* Treino  3 */}
        <div className="train-box">
        <img 
            src="https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F05771201.jpg&w=3840&q=20"
            alt="Lever Chest Press"
            />
            <p>Lever Chest Press</p>    
        </div>
    </div>
    </div>
    )
    }
