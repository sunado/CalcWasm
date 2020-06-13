mod utils;

use std::i64;
use wasm_bindgen::prelude::*;
use asciimath::{eval, scope};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

#[macro_use]
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

// #[derive(Serialize, Deserialize)]
// pub struct Variable {
//     name: String,
//     value: f64,
// }

#[wasm_bindgen]
pub fn calculator(expression: &str, variables: &JsValue) -> f64 {
    console_error_panic_hook::set_once();
    //let elements: Vec<Element> = variables.into_serde().unwrap();

    let sc = scope! {};
    let exp = expression.clone();
    //console_log!("exp: {}", exp);
    let res = eval(exp, &sc);
    let mut r:f64 = 0.0;
    if res.is_ok() {
        r = res.unwrap();
    }
    r
}

#[wasm_bindgen]
pub fn hex_to_dec(hex_str: &str) -> i64 {
    let res = i64::from_str_radix(hex_str, 16);
    let mut r:i64 = 0;
    if res.is_ok() {
        r = res.unwrap();
    }
    r
}

#[wasm_bindgen]
pub fn dec_to_hex(dec: u64) -> String {
    let res = format!("{:X}", dec);
    res.into()
}
