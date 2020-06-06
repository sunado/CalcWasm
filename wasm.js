import init, {greet} from "./math/pkg/math.js"

async function run (){
    await init();
    greet();
}

run()