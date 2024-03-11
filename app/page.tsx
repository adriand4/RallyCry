import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Car, Flag } from 'lucide-react'
import { Toggle } from "@/components/ui/toggle"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Separator } from "@/components/ui/separator"
import { Radar } from 'lucide-react';
import { MessageCircle } from 'lucide-react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Tabs defaultValue="main_feed" className="">
          <TabsList className ="grid w-full grid-cols-3 fixed bottom-0 left-0 right-0 h-[50px]">
            <TabsTrigger value="main_feed" className = "h-full">Main Feed</TabsTrigger>
            <TabsTrigger value="messages" className = "h-full">Messages</TabsTrigger>
            <TabsTrigger value="profile" className = "h-full">Profile</TabsTrigger>
          </TabsList>
            <TabsContent value="main_feed" className="space-y-3">
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
               </CardContent>
                <CardFooter className="flex-row space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                  <Toggle><MessageCircle/> 12 Comments</Toggle>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
               </CardContent>
                <CardFooter className="flex-row -space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
               </CardContent>
                <CardFooter className="flex-row -space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                </CardContent>
                <CardFooter className="flex-row -space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
               </CardContent>
                <CardFooter className="flex-row -space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
               </CardContent>
                <CardFooter className="flex-row -space-x-2">
                  <Toggle><Flag/> 301 Flags</Toggle>
                </CardFooter>
              </Card>
            </TabsContent>
          <TabsContent value="messages">
            <div className="columns-2 w-full">
              <div className="container-lg relative">
                <Button asChild className="h-full">
                <Card>
                  <CardHeader className="flex-row space-x-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle className = "text-lg">Username</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>"Did you get my message?"</p>
                  </CardContent>
                </Card>
                </Button>
              </div>
              <div className="container-lg relative">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Username</CardTitle>
                  </CardHeader>
                  <Separator></Separator>
                  <CardContent>
                    <p>Here is the full message, just for you to read</p>
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </TabsContent>
          <TabsContent value="profile">
            <Card className="h-full">
              <CardHeader className="flex-row space-x-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-col">
                  <CardTitle className="text-3xl">Username</CardTitle>
                  <CardDescription className="text-xl">301 Followers </CardDescription>
                </div>
              </CardHeader>
              <Separator></Separator>
              <CardContent className="my-3 text-xl">
                <h3>Current Faction: VSF <Radar/></h3>
                <Separator></Separator>
                <p>Here is the full message, just for you to read</p>
              </CardContent>
            </Card>   
          </TabsContent>
        </Tabs>
    </main>
  );
}
