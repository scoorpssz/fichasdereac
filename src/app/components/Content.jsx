import { TrainInfo } from './TrainInfo';

export const Content = (props) => {
    const trainings = [
        {
            id: 1,
            name: "Bench Press",
            img: "https://s3assets.skimble.com/assets/2289486/image_iphone.jpg",
            description: "Treino de força para o peitoral.",
        },
        {
            id: 2,
            name: "Straight Back Seated Row",
            img: "https://lyfta.app/thumbnails/02391201.jpg",
            description: "Exercício para fortalecer as costas.",
        },
        {
            id: 3,
            name: "Lever Chest Press",
            img: "https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F05771201.jpg&w=3840&q=20",
            description: "Treino com foco em peito e tríceps.",
        },
    ];

    return (
        <div>
            <title>Top-3 Treinos Favoritos</title>
            <h1>Top-3 Treinos Favoritos</h1>

            <div className="training">
                {trainings.map((props) => (
                    <div className="train-box" key={props.id}>
                        <img src={props.img} alt={props.name} />
                        <p>{props.name}</p>
                        <TrainInfo description={props.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};
