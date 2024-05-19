import { ExtendedUser } from "@/nextAuth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <p className="text-2xl text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">מספר זיהוי</p>
          <p className="w-fit truncate text-sm max-w-44 font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        {user?.name && (
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">שם</p>
            <p className="truncate text-sm max-w-44 font-mono p-1 bg-slate-100 rounded-md">
              {user?.name}
            </p>
          </div>
        )}
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">אימייל</p>
          <p className="truncate text-sm max-w-44 font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">סוג הרשאה</p>
          <p className="truncate text-sm max-w-44 font-mono p-1 bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">אימות דו-שלבי</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "כן" : "לא"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
export default UserInfo;
