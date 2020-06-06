

#[derive(Debug)]
struct Math {
    posixOrder: Vec<String>,
    operandStack: Vec<String>,
    expression: String,
}

impl Math {
    fn new() -> Math {
        Math {
            posixOrder: Vec::new(),
            operandStack: Vec::new(),
            expression: "".to_string(),
        }
    }

    fn eval(& mut self, expression: String) -> f64 {
        self.expression = expression;

        0.0
    }
}

trait Node {
    fn new(expresstion: String) -> Self;
    fn evalSub(&self);
}
