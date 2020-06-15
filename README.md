# learnRust

## Requirement 
1. Rust installed. (https://www.rust-lang.org/tools/install)  
2. wasm-pack installed. (https://rustwasm.github.io/wasm-pack/)  
3. Node installed.  (https://nodejs.org/en/download/package-manager/)  
4. http-server installed. (npm install -g http-server)  

## Build wasm module
1. Clone this repo.   
```
git clone  https://github.com/sunado/CalcWasm.git
```

2. Build wasm   
```
cd CalcWasm
cd math
wasm-pack build --target web
```

3. Show Result  
```
cd ..
http-server
```