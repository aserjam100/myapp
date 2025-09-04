import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signout } from "./login/actions";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  // User is logged in
  if (data?.user && !error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-gray-600 mt-2">Hello {data.user.email}</p>
            </div>
            <form>
              <Button formAction={signout} variant="outline">
                Sign out
              </Button>
            </form>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Notes</CardTitle>
              <CardDescription>
                Start creating and managing your notes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                You can now access your notes and create new ones.
              </p>
              <Button>Create New Note</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // User is not logged in
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Notes App</CardTitle>
          <CardDescription>Please log in to access your notes</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            You need to be logged in to create and manage your notes.
          </p>
          <Link href="/login">
            <Button className="w-full">Login to Enter Notes</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
