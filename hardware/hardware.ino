const int pin = 8;

void setup() {
  Serial.begin(9600);
  pinMode(pin, OUTPUT);
}

void loop() {
  if(Serial.available()){
    char i = Serial.read();
    Serial.println(i);
    if(i=='0'){
      // off
      Serial.println("off");
      digitalWrite(pin, LOW);
    } else {
      // on
      Serial.println("on");
      digitalWrite(pin, HIGH);
    }
  }
}
