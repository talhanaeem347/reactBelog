import Rename from "./Rename";
import UsestateHook from './UsestateHook';

const Home = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">Home</h1>
                
                <Rename />
                used state Hook
                <UsestateHook />
                </div>
        </section>
    );
}
export default Home;