import { Card, CardContent } from "@/components/ui/card";

export default function Map() {
  return (
    <Card className="shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126448.12351395896!2d-2.3684119216796875!3d7.358641100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb0abe79ea294f%3A0x53e33fb5d4edf0f1!2sSunyani%2C%20Ghana!5e0!3m2!1sen!2sus!4v1635420985645!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </CardContent>
    </Card>
  );
}
