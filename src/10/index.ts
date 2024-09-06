type Greet = () => string;

export const greet: Greet = () => {
  const hour = new Date().getHours();

  if (5 <= hour && hour <= 10) return "おはようございます！";
  if (11 <= hour && hour <= 17) return "こんにちは！";
  if (18 <= hour && hour <= 22) return "こんばんは！";
  if (hour === 23 || hour < 5) return "おやすみなさい！";
  return "あなたはどこの時間に生きているの？";
};
