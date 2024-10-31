import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OverviewCardProps {
  title: string;
  value: string;
  footer: any;
  icon: any;
}
export const OverviewCards: React.FC<OverviewCardProps> = ({
  title,
  value,
  footer,
  icon: Icon,
}) => {
  return (
    <Card className="flex flex-col gap-4 p-4 border rounded-lg shadow-md w-full  dark:bg-zinc-900  transition-all duration-500">
      <CardHeader className="flex items-center justify-between p-0">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className="w-6 h-6 text-orange-500 dark:text-orange-400" />
          )}{" "}
          {/* Icon */}
          <CardTitle className="text-lg font-semibold dark:text-gray-300">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <p className="text-3xl font-bold text-gray-800 dark:text-gray-300">
          {value}
        </p>
      </CardContent>
      {footer && (
        <CardFooter className="p-0 mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">{footer}</p>
        </CardFooter>
      )}
    </Card>
  );
};
