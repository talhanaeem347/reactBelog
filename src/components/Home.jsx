import Rename from "./Rename";
import UsestateHook from './UsestateHook';
import ListPreview from './ListPreview';

const Home = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold">Home</h1>
                <Rename />
                <p className="m-2 pb-2 text-lg">used state Hook</p>

                <div className="grid grid-cols-2 gap-2 w-2/3">
                    <UsestateHook />
                    <ListPreview />
                </div>
            </div>
        </section>
    );
}
export default Home;