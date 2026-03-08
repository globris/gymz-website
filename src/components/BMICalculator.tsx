import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type HeightUnit = "cm" | "feet";

const BMICalculator = () => {
  const [gender, setGender] = useState("male");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [heightCm, setHeightCm] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    let h: number;

    if (heightUnit === "cm") {
      h = parseFloat(heightCm) / 100;
    } else {
      const ft = parseFloat(heightFeet) || 0;
      const inc = parseFloat(heightInches) || 0;
      h = (ft * 12 + inc) * 0.0254;
    }

    if (!w || !h || h <= 0 || w <= 0) return;
    setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (bmi < 25) return { label: "Normal", color: "text-green-400" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-red-400" };
  };

  const reset = () => {
    setHeightCm("");
    setHeightFeet("");
    setHeightInches("");
    setWeight("");
    setAge("");
    setBmi(null);
  };

  return (
    <section id="bmi" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Health Tool
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">
            BMI CALCULATOR
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Calculate your Body Mass Index to understand your health better.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-card border border-border rounded-xl p-8 shadow-lg">
          {/* Gender */}
          <div className="mb-6">
            <Label className="text-foreground font-semibold mb-3 block">Gender</Label>
            <RadioGroup
              value={gender}
              onValueChange={setGender}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="text-muted-foreground cursor-pointer">Male</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="text-muted-foreground cursor-pointer">Female</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Age */}
          <div className="mb-6">
            <Label htmlFor="age" className="text-foreground font-semibold mb-2 block">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g. 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min={1}
              max={120}
              className="bg-background"
            />
          </div>

          {/* Height */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-foreground font-semibold">Height</Label>
              <Select value={heightUnit} onValueChange={(v) => setHeightUnit(v as HeightUnit)}>
                <SelectTrigger className="w-24 h-8 bg-background text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="feet">ft / in</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {heightUnit === "cm" ? (
              <Input
                type="number"
                placeholder="e.g. 175"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                min={50}
                max={300}
                className="bg-background"
              />
            ) : (
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder="Feet"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  min={1}
                  max={8}
                  className="bg-background"
                />
                <Input
                  type="number"
                  placeholder="Inches"
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  min={0}
                  max={11}
                  className="bg-background"
                />
              </div>
            )}
          </div>

          {/* Weight */}
          <div className="mb-8">
            <Label htmlFor="weight" className="text-foreground font-semibold mb-2 block">
              Weight (kg)
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder="e.g. 70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min={1}
              max={500}
              className="bg-background"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button onClick={calculateBMI} className="flex-1 gap-2">
              <Calculator size={18} />
              Calculate BMI
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset
            </Button>
          </div>

          {/* Result */}
          {bmi !== null && (
            <div className="mt-8 text-center p-6 rounded-lg bg-background border border-border">
              <p className="text-muted-foreground text-sm mb-1">Your BMI</p>
              <p className="font-display text-5xl text-foreground">{bmi}</p>
              <p className={`mt-2 text-lg font-semibold ${getCategory(bmi).color}`}>
                {getCategory(bmi).label}
              </p>
              <div className="mt-4 w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
