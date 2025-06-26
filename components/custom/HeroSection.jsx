"use client";
import { useState, useContext } from "react";
import { Sparkles, Globe, Plus, ArrowUp } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { UserDetailContext } from '@/context/UserDetailContext';
import SignInDialog from './SignInDialog';

function Hero() {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const placeholder = "Ask GhostScribe to create a blog about..";
  const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
  const router = useRouter();
  const { userDetail } = useContext(UserDetailContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetail?.name) {
      setOpenDialog(true);
      return;
    }
    setLoading(true);
    try {
      const msg = { role: 'user', content: prompt };
      const workspaceId = await CreateWorkspace({
        user: userDetail._id,
        messages: [msg]
      });
      router.push('/workspace/' + workspaceId);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[#0A0E17]" style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 30%, #1e293b 60%, #3B82F6 80%, #EAB308 100%)`
        }} />
      </div>
      {/* Title & Subtitle */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#F1F5F9] mb-4 drop-shadow-lg flex flex-wrap items-center justify-center gap-2">
        Build something
        <span className="inline-block text-4xl md:text-6xl align-middle">
          <Sparkles className="inline-block text-[#3B82F6] w-10 h-10 md:w-14 md:h-14" />
        </span>
        GhostScribe
      </h1>
      <p className="text-lg md:text-2xl text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
        Create apps and websites by chatting with AI
      </p>
      {/* Prompt Card */}
      <form
        className="w-full max-w-2xl mx-auto"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <div className="relative bg-[#111827] rounded-2xl shadow-xl border border-[#1F2937] px-6 py-6 flex flex-col sm:flex-row items-center transition-all">
            {/* Floating Label/Input */}
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={
                  `w-full bg-transparent text-[#F1F5F9] placeholder-transparent text-lg md:text-xl outline-none border-none focus:ring-0 transition-all`
                }
                required
                disabled={loading}
                id="hero-prompt"
              />
              <label
                htmlFor="hero-prompt"
                className={
                  `absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 ` +
                  ((isFocused || prompt) ? "-translate-y-8 text-sm text-[#3B82F6]" : "text-lg md:text-xl text-[#94A3B8]")
                }
              >
                {placeholder}
              </label>
            </div>
            {/* Right Arrow Button */}
            <button
              type="submit"
              disabled={loading}
              className="ml-0 sm:ml-4 mt-4 sm:mt-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#3B82F6] hover:bg-[#60A5FA] text-[#0A0E17] transition-all shadow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
          {/* Bottom Row: Public badge (static) */}
          <div className="flex items-center gap-2 mt-2 px-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1F2937] text-[#60A5FA]">
              <Plus className="w-4 h-4" />
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#1F2937] text-[#F1F5F9] text-sm font-medium">
              <Globe className="w-4 h-4 mr-1 text-[#60A5FA]" />
              Public
            </span>
          </div>
        </div>
        <SignInDialog openDialog={openDialog} closeDialog={setOpenDialog} />
      </form>
    </section>
  );
}

export default Hero;