const int pin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(pin, OUTPUT);
}

void loop() {
  if(Serial.available()){
    char i = Serial.read();
    
    if(i=='0'){
      // off
      digitalWrite(pin, LOW);
    } else {
      // on
      digitalWrite(pin, HIGH);
    }
  } else digitalWrite(pin, LOW);
}
