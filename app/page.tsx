"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Mail, Phone, CheckCircle, Sparkles } from "lucide-react"

interface FormData {
  name: string
  language: string
  topics: string[]
  modality: string
  frequency: string
  realTime: boolean
  channels: string[]
  email: string
  phone: string
  countryCode: string
  consent: boolean
}

const newsTopics = [
  "Artificial Intelligence",
  "Blockchain & Crypto",
  "Quantum Computing",
  "Cybersecurity",
  "Cloud Computing",
  "Machine Learning",
  "IoT & Smart Devices",
  "Fintech",
  "Biotech",
]

const countryCodes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
  { code: "+81", country: "JP" },
  { code: "+971", country: "AE" },
  { code: "+966", country: "SA" },
  { code: "+216", country: "TN" },
]

const tickerNews = [
  "🔴 BREAKING: Major tech breakthrough announced",
  "📈 Markets surge following economic report",
  "🌍 Global climate summit reaches historic agreement",
  "⚡ Revolutionary energy discovery changes everything",
  "🏆 Championship finals set record viewership",
]

export default function NewsSubscriptionPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    language: "",
    topics: [],
    modality: "",
    frequency: "",
    realTime: false,
    channels: [],
    email: "",
    phone: "",
    countryCode: "+1",
    consent: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTopicToggle = (topic: string) => {
    setFormData((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic) ? prev.topics.filter((t) => t !== topic) : [...prev.topics, topic],
    }))
  }

  const handleChannelToggle = (channel: string) => {
    setFormData((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    try {
      const response = await fetch("https://khaliltalan.app.n8n.cloud/webhook/0b130878-e62b-442f-9c3e-3ea352dc076c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      setTimeout(() => {
        setIsSubmitted(true)
        setIsSubmitting(false)
      }, 1500)
    } catch (error) {
      console.log("Webhook URL is placeholder - form data:", formData)
      setTimeout(() => {
        setIsSubmitted(true)
        setIsSubmitting(false)
      }, 1500)
    }
  }

  const cardClasses = `
    bg-white/10 
    backdrop-blur-lg 
    border border-white/20 
    shadow-2xl 
    hover:shadow-cyan-500/30 
    rounded-xl 
    transition-all 
    duration-300 
    hover:bg-white/20 
    hover:-translate-y-2 
    hover:scale-105 
    transform 
    relative 
    before:absolute 
    before:inset-0 
    before:bg-gradient-to-br 
    before:from-white/10 
    before:to-white/5 
    before:rounded-xl 
    before:-z-10
  `

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background_vid.mp4" type="video/mp4" />
        </video>
        {/* Bottom overlay to cover unwanted part */}
        <div className="fixed bottom-0 left-0 w-full h-24 bg-slate-900 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <Card className={`${cardClasses} p-8 text-center max-w-md mx-auto fade-in-up relative z-20`}>
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Welcome to the News Family! 🎉</h2>
            <p className="text-cyan-100">
              You're all set to receive breaking news updates. We'll keep you informed on the topics that matter most to
              you.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
      </video>
      {/* Bottom overlay to cover unwanted part */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-slate-900 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-slate-900/50 z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-full bg-cyan-500/20 backdrop-blur-sm py-2 overflow-hidden border-b border-cyan-400/30">
          <div className="ticker whitespace-nowrap text-cyan-100 font-medium">
            {tickerNews.join(" • ")} • {tickerNews.join(" • ")}
          </div>
        </div>

        <div className="absolute top-20 left-10 float opacity-20">
          <div className="w-32 h-20 bg-cyan-400/30 rounded-lg transform rotate-12 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 float opacity-15" style={{ animationDelay: "2s" }}>
          <div className="w-24 h-16 bg-blue-400/30 rounded-lg transform -rotate-6 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-40 left-20 float opacity-10" style={{ animationDelay: "4s" }}>
          <div className="w-28 h-18 bg-slate-400/30 rounded-lg transform rotate-3 backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center p-4 pt-16">
        {/* Header */}
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
            Stay Ahead of the <span className="text-cyan-400">Breaking News</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto text-pretty">
            Get personalized news updates delivered exactly how you want them. Join thousands who trust us for their
            daily dose of what matters.
          </p>
        </div>

        {/* Form Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Card 1: Basic Info */}
          <Card className={`${cardClasses} fade-in-up`} style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Tell us about yourself</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-cyan-100">
                    Name (Optional)
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="mt-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-cyan-100">Preferred Language</Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, language: value }))}
                  >
                    <SelectTrigger className="mt-1 bg-slate-800/50 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-cyan-100">Topics of Interest</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newsTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant={formData.topics.includes(topic) ? "default" : "outline"}
                        className={`cursor-pointer hover:scale-105 transition-transform ${
                          formData.topics.includes(topic)
                            ? "bg-cyan-500 text-white border-cyan-500"
                            : "border-slate-500 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                        }`}
                        onClick={() => handleTopicToggle(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Delivery Preferences */}
          <Card className={`${cardClasses} fade-in-up`} style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">How do you want your news?</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-cyan-100">News Format</Label>
                  <Select
                    value={formData.modality}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, modality: value }))}
                  >
                    <SelectTrigger className="mt-1 bg-slate-800/50 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="Choose format" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="text">📝 Text</SelectItem>
                      <SelectItem value="audio">🎧 Audio</SelectItem>
                      <SelectItem value="video">📹 Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-cyan-100">Frequency</Label>
                  <Select
                    value={formData.frequency}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, frequency: value }))}
                  >
                    <SelectTrigger className="mt-1 bg-slate-800/50 border-slate-600 text-white focus:border-cyan-400">
                      <SelectValue placeholder="How often?" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="daily">📅 Daily</SelectItem>
                      <SelectItem value="weekly">📊 Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between p-3 border border-slate-600 rounded-lg bg-slate-800/30">
                  <div className="space-y-0.5">
                    <Label htmlFor="realtime" className="text-sm font-medium text-white">
                      ⚡ Real-time breaking news alerts
                    </Label>
                    <p className="text-xs text-slate-400">Get instant notifications for urgent news</p>
                  </div>
                  <Switch
                    id="realtime"
                    checked={formData.realTime}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, realTime: checked }))}
                    className="data-[state=checked]:bg-cyan-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Channels */}
          <Card className={`${cardClasses} fade-in-up`} style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Where should we reach you?</h3>
              </div>

              <div className="space-y-3">
                <div className="space-y-3">
                  <div
                    className="flex items-center space-x-3 p-3 border border-slate-600 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    onClick={() => handleChannelToggle("whatsapp")}
                  >
                    <Checkbox
                      id="whatsapp"
                      checked={formData.channels.includes("whatsapp")}
                      onCheckedChange={() => handleChannelToggle("whatsapp")}
                      className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 border-slate-500"
                    />
                    <div className="flex-1">
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-white cursor-pointer">
                        📱 WhatsApp
                      </Label>
                      <p className="text-xs text-slate-400">Instant messages on your phone</p>
                    </div>
                  </div>

                  <div
                    className="flex items-center space-x-3 p-3 border border-slate-600 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    onClick={() => handleChannelToggle("email")}
                  >
                    <Checkbox
                      id="email"
                      checked={formData.channels.includes("email")}
                      onCheckedChange={() => handleChannelToggle("email")}
                      className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 border-slate-500"
                    />
                    <div className="flex-1">
                      <Label htmlFor="email" className="text-sm font-medium text-white cursor-pointer">
                        ✉️ Email
                      </Label>
                      <p className="text-xs text-slate-400">Detailed newsletters in your inbox</p>
                    </div>
                  </div>
                </div>

                {formData.channels.includes("email") && (
                  <div>
                    <Label htmlFor="email-input" className="text-sm font-medium text-cyan-100">
                      Email Address
                    </Label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                    />
                  </div>
                )}

                {formData.channels.includes("whatsapp") && (
                  <div>
                    <Label htmlFor="phone-input" className="text-sm font-medium text-cyan-100">
                      Phone Number
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, countryCode: value }))}
                      >
                        <SelectTrigger className="w-24 bg-slate-800/50 border-slate-600 text-white focus:border-cyan-400">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone-input"
                        type="tel"
                        placeholder="123-456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Consent & Submit */}
          <Card className={`${cardClasses} fade-in-up`} style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Ready to get started?</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 border border-slate-600 rounded-lg bg-slate-800/30">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: !!checked }))}
                    className="data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 border-slate-500 mt-0.5"
                  />
                  <Label htmlFor="consent" className="text-sm text-white leading-relaxed cursor-pointer">
                    I agree to receive news updates and understand I can unsubscribe at any time
                  </Label>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!formData.consent || isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 text-lg transition-all hover:scale-105 disabled:hover:scale-100 shadow-lg shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">📩 Start Getting News</div>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

