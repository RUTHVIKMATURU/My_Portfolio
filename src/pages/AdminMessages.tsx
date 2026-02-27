import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mail, Clock, CheckCircle2, Circle, Trash2, ArrowLeft } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      console.error('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/messages/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchMessages();
    } catch (err) {
      console.error('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <button onClick={() => window.history.back()} className="p-2 glass-effect rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-4xl font-black text-gradient uppercase tracking-widest">Inbox</h1>
          </div>
          <div className="glass-effect px-6 py-2 rounded-full border border-white/5 text-sm font-bold text-gray-400">
            {messages.length} Messages
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center p-20">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
              <Clock className="w-12 h-12 text-cyan-400" />
            </motion.div>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <motion.div
                key={msg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`glass-effect rounded-3xl p-8 border ${msg.status === 'unread' ? 'border-cyan-400/30' : 'border-white/5'
                  } relative overflow-hidden group`}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{msg.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${msg.status === 'unread' ? 'bg-cyan-400 text-black' : 'bg-white/10 text-gray-400'
                        }`}>
                        {msg.status}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-mono text-sm">{msg.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 text-[10px] font-mono">
                      {new Date(msg.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Subject</p>
                  <p className="text-lg font-bold text-white">{msg.subject}</p>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-6">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {msg.status === 'unread' && (
                    <button
                      onClick={() => updateStatus(msg._id, 'read')}
                      className="flex items-center gap-2 px-6 py-2 bg-cyan-400 text-black rounded-full font-bold text-xs uppercase"
                    >
                      <CheckCircle2 size={14} />
                      Mark as Read
                    </button>
                  )}
                  {msg.status === 'read' && (
                    <button
                      onClick={() => updateStatus(msg._id, 'replied')}
                      className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-full font-bold text-xs uppercase"
                    >
                      <Mail size={14} />
                      Mark as Replied
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {messages.length === 0 && (
              <div className="text-center py-20 glass-effect rounded-[3rem] border border-white/5">
                <Mail size={48} className="mx-auto text-gray-700 mb-4" />
                <p className="text-gray-500 font-bold uppercase tracking-widest">No messages yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
