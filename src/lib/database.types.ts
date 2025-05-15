
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posters: {
        Row: {
          id: string
          title: string
          description: string
          category: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc'
          date: string
          location: string
          keywords: string[]
          image_url: string
          uploaded_by: string
          uploaded_at: string
          is_approved: boolean
          moderation_status: 'pending' | 'approved' | 'rejected'
          moderation_message: string | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc'
          date: string
          location: string
          keywords?: string[]
          image_url: string
          uploaded_by: string
          uploaded_at?: string
          is_approved?: boolean
          moderation_status?: 'pending' | 'approved' | 'rejected'
          moderation_message?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: 'Job' | 'Event' | 'Party' | 'Study' | 'Misc'
          date?: string
          location?: string
          keywords?: string[]
          image_url?: string
          uploaded_by?: string
          uploaded_at?: string
          is_approved?: boolean
          moderation_status?: 'pending' | 'approved' | 'rejected'
          moderation_message?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
