use wasm_bindgen::prelude::*;

#[macro_use]
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}